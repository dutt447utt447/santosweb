import sambhavLogo from "../../../assets/sambhav/images/logo.png";

export default function LogoMark({ compact = false, stacked = false }) {
  return (
    <div className={`logo-lockup ${compact ? "logo-lockup--compact" : ""} ${stacked ? "logo-lockup--stacked" : ""}`}>
      <div className="logo-mark" aria-hidden="true">
        <img src={sambhavLogo} alt="" />
      </div>
      {!compact && (
        <div className="logo-copy">
          <strong>SAMBHAV</strong>
          <small>Integrated HR & Welfare Platform</small>
        </div>
      )}
    </div>
  );
}
