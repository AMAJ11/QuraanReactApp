import React, { useEffect, useState } from "react";
import './quraan.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



function App() {
    let [Newpage, setNewpage] = useState(1);
    let [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quranText, setQuranText] = useState([]);
    let [SurahName, setSurahName] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`);
                setQuranText(response.data.data);
                setSurahName(response.data.data.ayahs[0].surah.name);
                console.log(quranText);

                setLoading(false);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

    }, [pageNumber]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container">

            <div style={{ width: "100%" }}>
              <div style={{width:"fit-content",margin:"auto",marginBottom:"20px"}}>  <input type="number" min={1} max={604} style={{
                    color: 'black',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '10px',
                    width: '100px',
                    textAlign: 'center',
                    fontSize: '16px',
                    outlineColor: '#3b82f6', // لون الإطار عند التركيز
                    transition: '0.2s',
                }}
                    value={Newpage}              // قيمة input تأتي من state
                    onChange={(e) => {

                        setNewpage(Number(e.target.value));

                    }
                    }
                />
                <button
                className="ml-4"
                    style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: '0.3s',
                    }}
                    onClick={() => {
                        if (Newpage >= 1) {
                            setPageNumber(Newpage);
                        }
                        else { setNewpage(1); setPageNumber(1); }
                        if (Newpage > 604) { setNewpage(604); setPageNumber(604); }
                    }}> انتقل</button></div>
                     <div style={{ margin: "auto", width: "fit-content", marginTop: "15px" }} className="text-center">
                    <div style={{ display: "flex" }}>
                        <button onClick={() => { if (pageNumber != 1) { setPageNumber(Number(pageNumber) - 1) } }}> <FontAwesomeIcon icon={faArrowCircleLeft} style={{ fontSize: "50px" }} /> </button>
                        <h2 style={{ fontSize: "30px" }}> {pageNumber} </h2>
                        <button onClick={() => { if (pageNumber != 604) { setPageNumber(Number(pageNumber) + 1) } }}> <FontAwesomeIcon icon={faArrowCircleRight} style={{ fontSize: "50px" }} /> </button>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-blue-500 text-center mb-5">{SurahName}</h1>
                <div style={{ Height: "80vh", maxWidth: "900px", width: "100%", backgroundColor: "#1a202c", marginTop: "20px", padding: "10px", borderRadius: "8px", margin: "auto" }}>

                    {quranText.ayahs.map((ayah) => {
                        return (
                            <div style={{ lineHeight: "2.5" }}>
                                <p style={{ fontSize: "20px", textAlign: "center", marginBottom: "10px" }}>  {ayah.text}  <span className="text-orange-600">{ayah.numberInSurah}</span> </p>

                            </div>
                        )
                    })
                    }


                </div>
               
            </div>

        </div>
    );
}
export default App;