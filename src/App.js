import { hot } from "react-hot-loader/root";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import "App.less";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'rsuite/lib/styles/index.less';
import "react-sliding-pane/dist/react-sliding-pane.css";
import Header from "apps/petition/components/header";
import Aside from "apps/petition/components/aside";
import Main from "apps/petition/components/main";
import Panel from "apps/petition/components/panel";
import Spinner from "components/spinner"
import RegistrationForm from "apps/petition/components/main/registrationForm";

let App = ({loading}) => {
  return (
    <div className="App">
      {loading && <Spinner/>}
      <div id="main">
        <Header />
        <Aside />
        <div id="wrapper">
          <Main />
        </div>
        <div className="element">
          <div className="element-item"></div>
        </div>
      </div>
      <div className="custom-form-wrap">
        <RegistrationForm/>
      </div>
      <Panel/>
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    loading: theme.lastAction === themeActions.SUBMIT_FORM
  };
};

App = connect(mapStateToProps)(App);

export default hot(App);