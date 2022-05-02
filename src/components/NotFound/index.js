import {NotFoundContainer, Heading, Desc, Image} from './styledComponents'
// import Header from '../Header'
import VideoContext from '../../context/VideoContext'

const NotFound = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDarkTheme ? 'white' : 'black'

      const isDarkDesc = isDarkTheme ? 'white' : 'black'

      const isDarkContainer = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <NotFoundContainer isDark={isDarkContainer}>
            <Image src={imageUrl} alt="not found" />
            <Heading isDark={isDarkHeading} isDarkTheme>
              Page Not Found
            </Heading>
            <Desc isDark={isDarkDesc}>
              we’re sorry, the page you requested could not be found
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </VideoContext.Consumer>
)

export default NotFound
