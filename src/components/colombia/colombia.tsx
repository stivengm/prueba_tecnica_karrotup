import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './colombia.css';

function Colombia() {
    const [holidays, setHolyDays] = useState<any[]>([])
  
    useEffect(() => {
        var api_key = "DU6OKC0XfoP5aESXBw5Di4WttXlWftqT"
        const endPoint = `https://calendarific.com/api/v2/holidays?&api_key=${api_key}&country=CO&year=2024`;
        axios.get(endPoint)
        .then((response) => {
            getNextHoliday(response.data.response.holidays);
        })
        .catch((error) => {
          throw error;
        });
    }, [setHolyDays]);


    function getNextHoliday(getholidays: any) {
        var newListHolidays = [];
        var isSearchHoliday = false;
        var date = new Date();

        for (let i = 0; i < getholidays.length; i++) {
            const element = getholidays[i];
            
            if (!isSearchHoliday && date.getMonth() == element.date.datetime.month && element.date.datetime.day >= date.getDate() ) {
                isSearchHoliday = true;
                newListHolidays.push({ isNextHoliday: true, ...element });
            } else {
                newListHolidays.push({ isNextHoliday: false, ...element });
            }
        }

        console.log(newListHolidays);
        setHolyDays(newListHolidays);
        
    }

    return(

        <>
            <div className='header'>
                <Link to="/">
                    <button>
                        Regresar
                    </button>
                </Link>
                <h1>Festivos Colombia</h1>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre de festivo</th>
                            <th>Fecha</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            holidays.map(function(m) {
                                return <tr>
                                    <td className={(m.isNextHoliday) ? 'nextHoliday' : 'holiday'}>{m.name}</td>
                                    <td className={(m.isNextHoliday) ? 'nextHoliday' : 'holiday'}>{m.date.iso}</td>
                                    <td className={(m.isNextHoliday) ? 'nextHoliday' : 'holiday'}>{m.description}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        
        </>

    );
}

export default Colombia;