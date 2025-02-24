
const DateTime=()=>{
  const date=new Date();
  const showTime=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  console.log(date);
  return(
    <div>
      <p> date and time is: {date.toLocaleDateString()} {JSON.stringify(showTime)}</p>
      
    </div>
  )
}
export default DateTime;