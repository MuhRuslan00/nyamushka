import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader className='cards__wrap' 
    speed={2}
    width={320}
    height={490}
    viewBox="0 0 320 490"
    backgroundColor="#173848"
    foregroundColor="#C0C0C0"
  
  >
    <rect x="32" y="660" rx="3" ry="3" width="67" height="11" /> 
    <rect x="0" y="0" rx="12" ry="12" width="320" height="432" /> 
    <rect x="-1" y="442" rx="12" ry="12" width="320" height="19" /> 
    <rect x="0" y="469" rx="12" ry="12" width="147" height="19" />
  </ContentLoader>
)

export default Sceleton