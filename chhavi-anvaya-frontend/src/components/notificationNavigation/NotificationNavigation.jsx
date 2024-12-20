import styles from "../notificationNavigation/NotificationNavigation.module.css";

function NotificationNavigation() {
  return (
    <div className={styles.notificationNavigation}>
      <div className={styles.followRequest}>
				<h2>Follow Request</h2>
				<p>10 Pending Request<a href="www.google.com">See All</a></p>
			</div>
      <div className={styles.noticationContainer}>
        <div className={styles.notficationData}>
          <div className={styles.noticationProfileImage}>
            <img src="../../croissant.jpg" alt="" />
          </div>
          <h3>Username</h3>
          <p>liked your post</p>
          <p>1d</p>
          <div className={styles.notificationPostImage}>
            <img src="../../croissant.jpg" alt="" />
          </div>
        </div>
        <div className={styles.notficationData}>
          <div className={styles.noticationProfileImage}>
            <img src="../../croissant.jpg" alt="" />
          </div>
          <h3>Username</h3>
          <p>liked your post</p>
          <p>1d</p>
          <div className={styles.notificationPostImage}>
            <img src="../../croissant.jpg" alt="" />
          </div>
        </div>
        <div className={styles.notficationData}>
          <div className={styles.noticationProfileImage}>
            <img src="../../croissant.jpg" alt="" />
          </div>
          <h3>Username</h3>
          <p>liked your post</p>
          <p>1d</p>
          <div className={styles.notificationPostImage}>
            <img src="../../croissant.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationNavigation;