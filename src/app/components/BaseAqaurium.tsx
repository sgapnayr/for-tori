"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Aquarium from "../../../assets/aquarium.jpg";
import Trip from "../../../assets/trip.png";
import Image from "next/image";

export default function BaseAquarium() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.container}>
      <div>
        <span id="confettiReward" style={{ position: "absolute" }} />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={styles.header}
        >
          🎉 Surprise! 🎉
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.45, opacity: 0 }}
        animate={{ scale: 0.9, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={styles.card}
      >
        <p style={styles.message}>Merry Christmas ya filthy animal! 💝</p>
        <p style={styles.funMessage}>
          Let&apos;s get hammered at the aquarium! 🐠🍹
        </p>
        <div className="my-4" />
        <Image src={Trip} alt="Trip" width={360} height={270} />
        <Image src={Aquarium} alt="Aquarium" width={360} height={270} />

        <div style={styles.toggleContainer}>
          <button onClick={toggleMenu} style={styles.toggleButton}>
            {isOpen ? "Hide Details" : "Show Details"}
          </button>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              style={styles.list}
            >
              <li style={styles.listItem}>2 tickets to the aquarium 🐟</li>
              <li style={styles.listItem}>Pre-bought store wine 🍷</li>
              <li style={styles.listItem}>A wildly average time 🎉</li>
            </motion.ul>
          )}
        </div>
      </motion.div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundColor: "#f0f8ff",
    overflow: "hidden",
  },
  header: {
    fontSize: "2.7rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "0.9rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.8rem",
    borderRadius: "9px",
    boxShadow: "0 3.6px 5.4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "360px",
  },
  message: {
    fontSize: "1.08rem",
    color: "#555",
    marginBottom: "0.9rem",
  },
  funMessage: {
    fontSize: "1.35rem",
    color: "#0077cc",
    fontWeight: "bold",
    marginTop: "0.9rem",
  },
  toggleContainer: {
    marginTop: "1.35rem",
  },
  toggleButton: {
    backgroundColor: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "4.5px",
    padding: "0.45rem 0.9rem",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    marginTop: "0.9rem",
    textAlign: "left",
    fontSize: "0.9rem",
    color: "#555",
  },
  listItem: {
    marginBottom: "0.45rem",
  },
};
