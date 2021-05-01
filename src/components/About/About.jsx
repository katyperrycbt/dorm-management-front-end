import React from "react";
import useStyles from "./styles";
import InforForm from "./InforForm/InforForm";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={5} maxWidth="md">
      <Grid
        item
        xs={12}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
            color: "#dc143c",
          }}
          variant="h3"
        >
          ABOUT US
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        item
        xs={12}
        sm={4}
        alignItems="baseline"
      >
        <InforForm
          name="tran trong thuc"
          spec_position="leader"
          position="front-end developer"
          phone="0xxxxxxx"
          email="katyperrycbt@gmail.com"
          image="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/149788215_911958766245933_4932993638178353831_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=FkAtECtuT64AX-_dpV-&_nc_ht=scontent-hkt1-2.xx&oh=1bd43930921e5cb4194bb07de74c99a5&oe=60B27194"
        />
      </Grid>
      <Grid container item xs={12} sm={12} spacing={2}>
        <Grid container item xs={12} sm={4}>
          <InforForm
            name="nguyen duc dang khoi"
            spec_position="member"
            position="front-end developer"
            phone="0859 302 059"
            email="khoindd2000@gmail.com"
            image="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/169455091_2523154611164377_2094876535385077117_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nnl4PfkrqqYAX8h8-44&_nc_ht=scontent-sin6-2.xx&oh=6baed16f1db767353ebbfee3a7a761dc&oe=60B47F4D"
          />
        </Grid>
        <Grid container item xs={12} sm={4}>
          <InforForm
            name="huynh anh kiet"
            spec_position="member"
            position="back-end developer"
            phone="0789 620 781"
            email="kiethuynhnbk2000@gmail.com"
            image="https://scontent-hkt1-2.xx.fbcdn.net/v/t31.18172-8/26758713_1998086623804616_4929935960794963090_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=19026a&_nc_ohc=VqgfYzmxV_YAX_s5tdG&_nc_oc=AQlyNSy1Ysw1kCUL5Xx0Y-AGpIrxWWn_e66ShtgM5MJ7sw26CLxWosxgQjlcll5cpYfw0yFcD6IZXwek5jHo_l6h&_nc_ht=scontent-hkt1-2.xx&oh=77c39f0841621e409c993e797c7bc776&oe=60B25A04"
          />
        </Grid>
        <Grid container item xs={12} sm={4}>
          <InforForm
            name="nguyen le thanh tam"
            spec_position="member"
            position="back-end developer"
            phone="0827 505 991"
            email="hanzohattori098@gmail.com"
            image="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/82806880_2469775776674137_1416140619746639872_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=VoHIatYHShMAX8pSXWH&_nc_ht=scontent-hkt1-2.xx&oh=23e6ad8d1b72d4df82c13fa639d32f1f&oe=60B251AD"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
