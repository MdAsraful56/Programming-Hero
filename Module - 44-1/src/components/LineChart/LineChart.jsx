import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
export default function LineChart() {

        const studentData = [
        { id: 1, name: "John Smith", mark: 78 },
        { id: 2, name: "Emily Davis", mark: 85 },
        { id: 3, name: "Michael Johnson", mark: 92 },
        { id: 4, name: "Sarah Brown", mark: 88 },
        { id: 5, name: "David Wilson", mark: 95 },
        { id: 6, name: "Sophia Martinez", mark: 67 },
        { id: 7, name: "James Anderson", mark: 89 },
        { id: 8, name: "Olivia Thomas", mark: 81 },
        { id: 9, name: "Ethan Garcia", mark: 90 },
        { id: 10, name: "Isabella Lopez", mark: 76 }
    ];

    return (
        <div>
            <h3 className="text-xl mb-5 ml-32">10 Students Marks</h3>
            <LChart width={400} height={200} data={studentData} >
                <XAxis dataKey={`id`} />
                <YAxis/>
                <Line dataKey="mark" stroke="red" ></Line>
            </LChart>
        </div>
    )
}