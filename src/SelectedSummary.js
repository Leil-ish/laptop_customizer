import React from 'react';
import SelectedOptions from './SelectedOptions';

function SelectedSummary(props) {
    const total = Object.keys(props.selected)
        .reduce((acc, curr) => acc + props.selected[curr].cost, 0);    

    const summary = Object.keys(props.selected)
        .map(key => {
        return <SelectedOptions key={key}
                     selected={props.selected}
                     name={key}/>
        });
        
    return (<section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total) }
            </div>
        </div>
    </section>
    )
}

export default SelectedSummary;