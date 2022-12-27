import React from 'react';

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "jeff"
  }
]

const AttendanceBook = (props) => {
  return (
    <div>
      <ul>
        {students.map((student) => {
          return <li key={`student-id-${student.id}`}>{student.name}</li>
        })}
      </ul>
    </div>
  );
};

export default AttendanceBook;