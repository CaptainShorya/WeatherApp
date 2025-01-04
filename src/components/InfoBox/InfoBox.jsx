import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FlareIcon from '@mui/icons-material/Flare';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({info}) {
  const URL =
    "https://images.unsplash.com/photo-1681056164963-8ee1b4e6b28b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVsaGklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
 
    const Cold_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    const Hot_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const Rain_URL = "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  return (
    <div className="InfoBox">
      <div className="Card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? Rain_URL : info.temp > 15 ? Hot_URL : Cold_URL} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity >  60 ? <ThunderstormIcon/> : info.temp > 15 ? <FlareIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}&deg;C</p>
              <p>Max_temp = {info.tempmax}&deg;C</p>
              <p>Min_temp = {info.tempmin}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
