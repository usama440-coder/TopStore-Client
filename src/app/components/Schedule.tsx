import style from "../styles/schedule.module.css";

const Schedule = () => {
  return (
    <table className={style.scheduleTable}>
      <tbody>
        <tr>
          <td>Mon - Fri</td>
          <td>8:00 am - 6:30 pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>8:00 am - 6:00 pm</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>Closed</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Schedule;
