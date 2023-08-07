import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const GradientText = ({
  text,
  variant,
  titleW,
  titleM,
  headingW,
  headingM,
}) => {
  const GradientTypography = styled(Typography)(({ theme }) => ({
    backgroundImage:
      "linear-gradient(90deg, #000000 -4.69%, #ECA830 48.02%, #000000 103.89%)",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: titleM || titleW || headingW || headingM ? 400 : 700,
    fontFamily: titleM || titleW || headingW || headingM ? "" : "Cormorant",
  }));

  return (
    <GradientTypography
      variant={
        titleW ? "h2" : titleM ? "h4" : headingW ? "h3" : headingM ? "h6" : "h4"
      }
    >
      {text}
    </GradientTypography>
  );
};

export default GradientText;
