import React from "react";
import { useOutletContext } from "react-router-dom";
import { Typography, Box } from "@mui/material"; // Import MUI components

export default function HostVanInfo() {
  const { van } = useOutletContext();
  const styledText ={ fontWeight: 700, fontSize: 15, marginBottom: "21px" }
  const styledSpan ={ fontWeight: 500 }


  return (
    <Box className="host-van-detail-info">
      <Typography variant="h4" sx={styledText}>
        Name: <span style={styledSpan}>{van.name}</span>
      </Typography>
      <Typography variant="h4" sx={styledText}>
        Category: <span style={styledSpan}>{van.type}</span>
      </Typography>
      <Typography variant="h4" sx={styledText}>
        Description: <span style={styledSpan}>{van.description}</span>
      </Typography>
      <Typography variant="h4" sx={styledText}>
        Visibility: <span style={styledSpan}>Public</span>
      </Typography>
    </Box>
  );
}




