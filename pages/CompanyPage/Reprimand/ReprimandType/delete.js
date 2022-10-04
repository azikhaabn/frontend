import React from "react";
import Head from "next/head";
import styles from "/styles/Reprimand/ResetCancelDelete.module.css";

const hapus = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Company Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        ></link>
      </Head>

      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div class="modal-body ms-3">
            <p className={styles.text}>
              Are You Sure Want To Delete This<br></br>
              Reprimand Type?
            </p>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              onClick={() => closeModal(false)}
            >
              YES
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-3 btn-sm`}
              data-bs-dismiss="modal"
            >
              NO
            </button>
          </div>
        </div>
      </main>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default hapus;
