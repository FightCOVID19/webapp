/**
 * @return Record< pageNumber:string, PatientQuiz >
 *
 * ``` ts
 * interface PatientQuiz {
 *  // text to display
 *  text: string
 *  // show close contact button + icon
 *  closeContact: string
 *  // text after close contact
 *  text2: string
 *  // page when press onBack
 *  onBack: string
 *  // page when press yes
 *  onYes: string
 *  // page when press no
 *  onNo: string
 * }
 * ```
 */
export const patientQuizData = {
  '1': {
    text: 'patent.quiz.1',
    onBack: '/patient-quiz-launch',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/2'
  },
  '2': {
    text: 'patent.quiz.2',
    onBack: '/patient-quiz/1',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/3'
  },
  '3': {
    text: 'patent.quiz.3',
    onBack: '/patient-quiz/2',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/4'
  },
  '4': {
    text: 'patent.quiz.4',
    onBack: '/patient-quiz/3',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/5'
  },
  '5': {
    text: 'patent.quiz.5',
    onBack: '/patient-quiz/4',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/6'
  },
  '6': {
    text: 'patent.quiz.6',
    onBack: '/patient-quiz/5',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/7'
  },
  '7': {
    text: 'patent.quiz.7',
    onBack: '/patient-quiz/6',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/8'
  },
  '8': {
    text: 'patent.quiz.8',
    onBack: '/patient-quiz/7',
    onYes: '/patient-risk-confirmed',
    onNo: '/patient-quiz/9'
  },
  '9': {
    text: 'patent.quiz.9',
    onBack: '/patient-quiz/8',
    onYes: '/stay-home',
    onNo: '/patient-quiz/10'
  },
  '10': {
    text: 'patent.quiz.10',
    onBack: '/patient-quiz/9',
    onYes: '/stay-home',
    onNo: '/patient-quiz/11'
  },
  '11': {
    text: 'patent.quiz.11',
    onBack: '/patient-quiz/10',
    onYes: '/stay-home',
    onNo: '/patient-quiz/12'
  },
  '12': {
    text: 'patent.quiz.12',
    closeContact: true,
    text2: 'patent.quiz.12.2',
    onBack: '/patient-quiz/11',
    onYes: '/stay-home',
    onNo: '/patient-quiz/13'
  },
  '13': {
    text: 'patent.quiz.13',
    closeContact: true,
    text2: 'patent.quiz.13.2',
    onBack: '/patient-quiz/12',
    onYes: '/stay-home',
    onNo: '/wohoo'
  }
};
