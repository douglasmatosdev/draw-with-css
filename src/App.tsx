import React from 'react';
import LogoTwitter from './LogoTwitter';
import Assignature from './Assignature'
import './App.css';

function App() {
    const svgTwitterRef = React.createRef<SVGSVGElement>()
    const svgAssignatureRef = React.createRef<SVGSVGElement>()


    React.useEffect(() => {
        if (svgAssignatureRef.current) {

            const pathAssignatureSVG = svgAssignatureRef.current.querySelector('path');
            const assignaturePathLength = pathAssignatureSVG?.getTotalLength();
            svgAssignatureRef.current.style.setProperty('--assignaturePathLength', String(assignaturePathLength));

        }
        if (svgTwitterRef.current) {
            const pathTwitterSVG = svgTwitterRef.current.querySelector('path');
            const twitterPathLength = pathTwitterSVG?.getTotalLength();
            svgTwitterRef.current.style.setProperty('--twitterPathLength', String(twitterPathLength));
        }
    }, [svgAssignatureRef.current, svgTwitterRef.current])

    return (
        <div className="App">
            <div className="Assignature">
                <Assignature ref={svgAssignatureRef} />
            </div>
            <div className="Twitter">
                <LogoTwitter ref={svgTwitterRef} />
            </div>
        </div>
    );
}

export default App
