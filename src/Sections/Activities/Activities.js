import './Activities.css';

function Activities() {
  const activities = [
    {
      name: 'Open day',
      date: 'February 10, 2025',
      description:
        '',
    },
   
  ];

  return (
    <section className="activities-section py-5" id='activities'>
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">Our events</h2>
        <div className="row">
          {activities.map((activity, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="activity-card shadow p-4">
                <h4>{activity.name}</h4>
                <p className="text-muted">{activity.date}</p>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
