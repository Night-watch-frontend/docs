import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { store } from "../../store";
import { observer } from "mobx-react-lite";

export const FileDoc: FC = observer(() => {
  const { category, title } = useParams();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    store.fetchFile(`${category}/${title}`);
  }, [category, title]);

  const href = store.state.path;
  return (
    <Box sx={{ width: "100%", bgcolor: "#FFF", p: "10px" }}>
      <Typography
        component="h2"
        variant="h6"
        marginBottom={2}
        sx={{ fontWeight: "bold", color: "var(--black)" }}
      >
        {`${category}/${title}`}
      </Typography>
      {loading && (
        <Box
          component={"div"}
          sx={{ color: "var(--black)", textAlign: "center" }}
        >
          <Typography component={"span"} variant="h6">
            Loading...
          </Typography>
        </Box>
      )}
      <img
        onLoad={() => setLoading(false)}
        alt="Picture of the author"
        src={href}
        width={600}
        height={650}
        style={loading ? { display: "none" } : { display: "block" }}
      />
    </Box>
  );
});
