export function Colorbox({ clr }) {
  const styles = {
    width: "250px",
    height: "25px",
    background: clr,
    marginTop: "5px",
  };
  return (
    <div style={styles}></div>
  );
}
