import Image from "next/image";

import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    display: "box",
    lineClamp: 2,
    boxOrient: "vertical",
    overflow: "hidden",
  },
}));

export default function ImagePreview({ thumbnailUrl, title, description }) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.mainContent}
            gutterBottom
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}
