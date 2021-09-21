import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    display: "box",
    lineClamp: 2,
    boxOrient: "vertical",
    overflow: "hidden",
  },
  cardActions: {
    padding: "16px",
  },
}));
function YoutubeEmbed({ videoUrl, title, description, date }) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          height="300"
          src={videoUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            marginBottom={"1rem"}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            className={classes.description}
            gutterBottom
            marginBottom={"1rem"}
          >
            {description}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="text.secondary"
            component="div"
            textMuted
            className={classes.date}
          >
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" variant="outlined" color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}
YoutubeEmbed.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
