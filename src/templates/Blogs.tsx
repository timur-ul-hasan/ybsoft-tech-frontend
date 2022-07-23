import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
  styled,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BlogTemplate() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className="max-w-5xl m-auto"
    >
      <Grid item xs={12}>
        <Typography variant="h1">
          <h1>Blogs</h1>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BlogTemplate;
