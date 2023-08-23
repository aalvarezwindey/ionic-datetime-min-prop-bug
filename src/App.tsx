import { IonApp, IonButton, IonDatetime, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';

setupIonicReact();

const minDate = '2023-08-22T00:00:00';
const App: React.FC = () => {

  const [min, setMin] = useState<string | undefined>(minDate);
  
  return (
  <IonApp>
    <IonButton
      onClick={() => {
        if (min) {
          setMin(undefined);
        } else {
          setMin(minDate);
        }
      }}
    >
      Toggle Min
    </IonButton>
    <IonDatetime
      min={min}
      onIonChange={({ detail }) => {
        console.log(detail.value as string);
      }}
      minuteValues="0,15,30,45"
      presentation="time"
      locale="en-US"
      hourCycle="h12"
      preferWheel
    />
  </IonApp>
)};

export default App;
