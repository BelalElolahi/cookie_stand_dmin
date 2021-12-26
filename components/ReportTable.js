import axios from "axios"

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const endPoint = baseUrl + 'api/v1/cookie_stands/'
export default function ReportTable(props) {
    let totalOfHours = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totalOfTotal = 0

    function config() {

        return {
            headers: {
                'Authorization': `Bearer ${props.token.access}`
            }
        }
    }
    async function deleteResource(id) {
        try {
            const url = endPoint + id;
            await axios.delete(url, config());
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>

            <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">

                <table>
                    <thead>
                        <tr className='border border-collapse border-black table-auto bg-green-500' >
                            <th>Location</th>
                            {props.hours.map(hour => {
                                return <th className='border border-collapse border-black table-auto'>{hour}</th>
                            })}

                            <th className='border border-collapse border-black table-auto'>
                                Total
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.Branches.map(Branche => {
                            let total = 0
                            return (
                                <tr className='border border-collapse border-black table-auto odd:bg-green-400 even:bg-green-300'>
                                    <td className='border border-collapse border-black table-auto'>{Branche.location}{<svg onClick={() => deleteResource(Branche.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>}</td>
                                    {Branche.hourly_sales.map((item, indx) => {
                                        total += item
                                        totalOfHours[indx] += item
                                        return (
                                            <td className='border border-collapse border-black table-auto'>{item}</td>
                                        )
                                    })}
                                    <td className='border border-collapse border-black table-auto'>{total}</td>

                                </tr>
                            )
                        })

                        }

                    </tbody>

                    <tfoot>
                        <tr className='border border-collapse border-black table-auto bg-green-500' >
                            <td className='border border-collapse border-black table-auto' >Totals</td>

                            {totalOfHours.map(item => {
                                totalOfTotal += item
                                return (
                                    <td className='border border-collapse border-black table-auto' >{item}</td>
                                )
                            })
                            }

                            <td className='border border-collapse border-black table-auto'>{totalOfTotal}</td>

                        </tr>

                    </tfoot>
                </table>

            </div>

        </>

    )
}