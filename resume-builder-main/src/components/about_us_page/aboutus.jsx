import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import DrawerAppBar from '../navbar/navbar';
import aboutCV from "../image/aboutCV.jpg"


// the briefing of the website  nothing much only an overview of the resume@builder

export default function ButtonMUI() {
  return (
    <>
      <DrawerAppBar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Resume Builder is a free web application where you can build your
            resume instantly. Create a professional resume in minutes with ample
            of templates available. Once you have filled the resume fields, you get a preview
            and download option. Click download to have it to your local hard
            drive. You can update your resumes which you have created earlier
            and delete them too.
            <br/>
            Our web application, Resume Builder, is a user-friendly and free tool designed to simplify the resume creation process. With the aim of helping individuals craft professional and compelling resumes effortlessly, our application provides an intuitive interface and a range of customizable templates.
          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img
              src={aboutCV}
              alt="img"
            // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Kindly Share in your circle
          </Typography>
          <Box className="icons">
            <Link to="https://www.instagram.com/abdul.quadir007/?hl=en">
              <Instagram
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="error"
              />
            </Link>

            <Link to="https://www.facebook.com">
              <FacebookOutlinedIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>

            <Link to="https://www.linkedin.com/in/gulam-quadir-parwez-5694a122a/">
              <LinkedInIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>
            <Link to="https://web.whatsapp.com">
              <WhatsAppIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="success"
              />
            </Link>
            <Link to="https://www.twitter.com">
              <TwitterIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="info"
              />
            </Link>
            <Link to="https://github.com/GulamQuadir500">
              <GitHub
                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
              />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
