import * as React from 'react';

import { 
    DashboardMain, 
} from './styled/Dashboard.styled';

import BestMovies from 'src/components/Dashboard/BestMovies';
import GreateMusics from 'src/components/Dashboard/GreatMusic';
import MusicForTrip from 'src/components/Dashboard/MusicForTrip';
import GiveFeedback from 'src/components/Dashboard/GiveFeedback';

const Dashboard = (props) => {

    return (
        <DashboardMain>
            <BestMovies />
            <GreateMusics />
            <MusicForTrip />
            <GiveFeedback />
        </DashboardMain>
    )
}

export default Dashboard;