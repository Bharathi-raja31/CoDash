import * as React from 'react';

// Bootstrap
import MediaQuery from 'react-responsive'
import { Scrollbars } from 'react-custom-scrollbars';

// Components
// import Loader from '../components/Loader';

// UI Components
import SearchWidget from './SearchWidget'
import SelectItemWidget from './SelectItemWidget';

export default class Aside extends React.Component {

    render() {
        return (
            <aside className="page-aside">
                <div className="page-aside-inner">
                    <SearchWidget />
                    <MediaQuery minDeviceWidth={1025}>
                        <Scrollbars autoHeight autoHeightMin={422} autoHeightMax={327}>
                            <SelectItemWidget />
                        </Scrollbars>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1024}>
                        <SelectItemWidget />
                    </MediaQuery>
                </div>
            </aside>

        );
    }
}
