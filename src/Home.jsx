import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const [prayerTimes, setPrayerTimes] = useState([]);
    const prayerNames = [
        { name: "الفجر",key: 'Fajr'},
        { name: "الظهر",key: 'Dhuhr' },
        { name: "العصر",key: 'Asr'  },
        { name: "المغرب",key: 'Maghrib' },
        { name: "العشاء",key: 'Isha'  },
    ]
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // دالة لجلب البيانات
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.aladhan.com/v1/timingsByCity?city=Damascus&country=Sy&method=4");
                console.log(response);

                setPrayerTimes(response.data.data.timings);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div className="container">
            <div>
                <h1 className="text-4xl font-bold text-blue-500 text-center mb-10">اوقات الصلاة</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 lg:grid-cols-5 " style={{ direction: 'rtl', textAlign: 'center' }}>
                    {prayerNames.map((prayer) => (
                        <div class="max-w-sm rounded-lg shadow-lg p-6 mx-3" style={{height:'200px',margin:'10px',backgroundColor:'#1a202c',minWidth:'250px',width:"100%",display:"flex",flexDirection:'column',justifyContent:'space-between',alignItems:'space-around'}}>
                            <h2 className="text-xl font-bold mb-2">{prayer.name}</h2>
                             <h1 style={{fontSize:"20px",fontWeight: "bold"}} className="text-blue-600">
                                {prayerTimes[prayer.key]}
                                 </h1>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
export default App;