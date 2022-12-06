const MainHead = ({ title, subTitle }) => (
  <>
    <h1>{title}</h1>
    {
      subTitle ?
      <p>
        {subTitle}
      </p>
      : 
      ''
    }
  </>
)

export default MainHead;