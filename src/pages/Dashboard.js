import * as React from 'react';

import { 
    DashboardMain, 
} from './styled/Dashboard.styled';

import BestMovies from 'src/components/Dashboard/BestMovies';
import GreateMusics from 'src/components/Dashboard/GreatMusic';
import MusicForTrip from 'src/components/Dashboard/MusicForTrip';

const Dashboard = (props) => {

    return (
        <DashboardMain>
            <BestMovies />
            <GreateMusics />
            <MusicForTrip />
        </DashboardMain>
    )
}

export default Dashboard;