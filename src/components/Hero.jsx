const Hero = () => {
    return ( 
        <div className="container inner hero">
            <div className="a">
                <p className="question p">"How do I improve my public speaking skills?"</p>
                <p className="question p">
                "What is the best way to learn a new language?""
                </p>
                <p className="questionn p">
                "How do I change a flat tire on my car?"
                </p>
            </div>
            <div className="b">
                <p className="p">
                Aanalyzes human language, including grammar, syntax, and context.
                </p>
                <p className="p">
                Understands language context, resulting in more accurate and relevant responses.
                </p>
                <p className="p">
                Can extract named entities like people, places, organizations, and dates from text.
                </p>
            </div>
            <div className="c">
                <p className="p">
                Responses may reflect biases or stereotypes present in its training data.
                </p>
                <p className="p">
                Incomplete or inaccurate information
                </p>
                <p className="p">
                May provide technically correct but nonsensical responses due to its limited common sense and background knowledge.
                </p>
            </div>
        </div>
     );
}
 
export default Hero;