import * as React from 'react' ;

import { 
    GiveFeedbackMain,
    CustomButton
} from './styled/GiveFeedback.styled';

const GiveFeedback = () => {
    return (
        <GiveFeedbackMain>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1c6.075 0 11 4.495 11 10.04 0 2.548-1.04 4.875-2.755 6.646l.47 4.765a.5.5 0 01-.703.505L15.007 20.7c-.956.247-1.964.38-3.007.38-6.075 0-11-4.495-11-10.04C1 5.495 5.925 1 12 1zm0 2c-5.01 0-9 3.642-9 8.04 0 4.397 3.99 8.04 9 8.04.716 0 1.419-.075 2.1-.22l.406-.096.682-.177 3.282 1.479-.306-3.106.644-.665C20.218 14.838 21 12.99 21 11.04 21 6.642 17.01 3 12 3z"></path></svg>
                How do you rate services on board of this vehicle?
                <CustomButton>
                    Give us a feedback
                </CustomButton>
        </GiveFeedbackMain>
    )
}

export default GiveFeedback;