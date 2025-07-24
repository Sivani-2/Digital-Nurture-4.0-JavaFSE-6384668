import styles from './CohortDetails.module.css'; // Import CSS module

function CohortDetails(props) {
  const { cohortCode, technology, startDate, currentStatus, coachName, trainerName } = props.cohort;

  // Inline style for conditional heading color
  const headingStyle = {
    color: currentStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>
        {cohortCode} - <span>{technology}</span>
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>
        <dt>Current Status</dt>
        <dd>{currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{coachName}</dd>
        <dt>Trainer</dt>
        <dd>{trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;