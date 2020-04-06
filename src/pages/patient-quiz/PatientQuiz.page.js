import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../../components/Layout';
import { patientQuizData } from './PatientQuizData';
import PatientQuiz from '../../components/PatientQuiz/PatientQuiz';

export const PatientQuizPage = props => {
  const pageNumber = props.match.params.id;
  const patientPageQuizData = patientQuizData[pageNumber];
  const totalPages = Object.keys(patientQuizData).length;
  if (!patientPageQuizData) {
    return `Error ${pageNumber} not exist`;
  }

  const {
    text,
    closeContact,
    text2,
    onBack,
    onYes,
    onNo
  } = patientPageQuizData;

  const onPressBack = () => {
    props.history.push(onBack);
  };
  const onPressYes = () => {
    props.history.push(onYes);
  };
  const onPressNo = () => {
    props.history.push(onNo);
  };
  const onPressContact = () => {
    // Show modal
    // eslint-disable-next-line no-console
    console.log('onPressContact NOT IMPLEMENTED');
    
  };

  return (
    <div>
      <Layout
        onPressBack={onPressBack}
        page={pageNumber}
        totalPages={totalPages}
      >
        <PatientQuiz
          text={text}
          closeContact={closeContact}
          text2={text2}
          onPressNo={onPressNo}
          onPressYes={onPressYes}
          onPressContact={onPressContact}
        />
      </Layout>
    </div>
  );
};

PatientQuizPage.propTypes = {
  history: PropTypes.objectOf(Object),
  match: PropTypes.objectOf(Object),
};
