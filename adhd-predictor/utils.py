import streamlit as st


def display_results(prediction):
    st.header("Results")
    if prediction[0] == 1:
        st.warning("Subject may have ADHD")
    else:
        st.success("Subject may not have ADHD")
