import ContentLoader from "react-content-loader"

const UserDetailsLoader = () => (
  <ContentLoader 
    speed={2}
    width={800}
    height={460}
    viewBox="0 0 800 460"
    backgroundColor="#f3eded"
    foregroundColor="#cfd1d8"
  >
    <rect x="249" y="99" rx="2" ry="2" width="600" height="40" /> 
    <rect x="19" y="78" rx="2" ry="2" width="224" height="220" /> 
    <rect x="249" y="146" rx="2" ry="2" width="600" height="40" /> 
    <rect x="250" y="193" rx="2" ry="2" width="600" height="40" /> 
    <rect x="250" y="240" rx="2" ry="2" width="600" height="40" />
  </ContentLoader>
)

export default UserDetailsLoader

