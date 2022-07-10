import TabsItem from "./TabsItem";
import Container from "./Container";

const Content = () => {
    return (
        <section className="content">
            <div className="content__head">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="content__title">New items</h2>
                            <ul className="nav nav-tabs content__tabs" role="tablist">
                                <TabsItem/>
                            </ul>
                            <div className="content__mobile-tabs" id="content__mobile-tabs">
                                <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation"
                                     id="mobile-tabs"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <input type="button" value="New items"/>
                                    <span></span>
                                </div>
                                <div className="content__mobile-tabs-menu dropdown-menu"
                                     aria-labelledby="mobile-tabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <TabsItem/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container/>
        </section>
    );
}
export default Content;