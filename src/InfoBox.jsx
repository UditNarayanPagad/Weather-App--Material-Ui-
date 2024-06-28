import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const InfoBox = ({detail}) => {
    // const [display, setdisplay] = useState("");
    // !detail.show && setdisplay("hidden");
  return (
    <div>
      <Card sx={{ minWidth: 345 }} >
        <CardMedia
          sx={{ height: 140 }}
          image="https://t4.ftcdn.net/jpg/04/85/17/33/360_F_485173339_rHVWOWEwZneJpHqgFNiYJLSPQg7hNoAA.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>{detail.city}</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <h4>Temperature: {detail.temp}&deg;C</h4>
            <h4>Feels like: {detail.feels_like}&deg;C</h4>
            <h4>Min_Temperature: {detail.min_temp}&deg;C</h4>
            <h4>Max_Temperature: {detail.max_temp}&deg;C</h4>
            <h4>Humidity: {detail.humidity}</h4>
            <h4>Sky: {detail.sky}</h4>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
