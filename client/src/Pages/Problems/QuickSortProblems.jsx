import React, { useState } from 'react';
import "../../index.css";
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function QuickSortProblems() {
    const [activeButton, setActiveButton] = useState(4); // Default to show all
    const [questions, setQuestions] = useState([
        { id: 1, name: 'Contains Duplicate III', difficulty: 'Hard', solveLink: 'https://leetcode.com/problems/contains-duplicate-iii/', checked: false },
        { id: 2, name: 'Noor and his pond', difficulty: 'Medium', solveLink: 'https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/practice-problems/algorithm/noor-and-his-pond-760eabe0/', checked: false },
        { id: 3, name: 'Eating apples', difficulty: 'Easy', solveLink: 'https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/practice-problems/algorithm/snake-b0112afa/', checked: false },
        { id: 4, name: 'Minimum Swaps to Sort', difficulty: 'Medium', solveLink: 'https://practice.geeksforgeeks.org/problems/minimum-swaps/1', checked: false },
        { id: 5, name: 'A cricket tournament', difficulty: 'Easy', solveLink: 'https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/practice-problems/algorithm/chef-and-chefa-a5c8800a/', checked: false },
        { id: 6, name: 'Destination City', difficulty: 'Easy', solveLink: 'https://leetcode.com/problems/destination-city/?envType=daily-question&envId=2023-12-15', checked: false },
        { id: 7, name: 'Group Anagrams', difficulty: 'Hard', solveLink: 'https://leetcode.com/problems/group-anagrams/', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
        // ... (other questions)
    ]);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const handleCheckboxChange = (questionId) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                if (question.id === questionId) {
                    return { ...question, checked: !question.checked };
                }
                return question;
            })
        );
    };

    const handleSolveClick = (solveLink) => {
        window.open(solveLink, '_blank');
    };

    const filteredQuestions = questions.filter((question) => {
        return activeButton === 4 || question.difficulty.toLowerCase() === ['easy', 'medium', 'hard'][activeButton - 1].toLowerCase();
    });
     

    return (
        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/quick-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="card-heading text-[3rem] mb-4">Quick Sort Problems</h1>

                {/* Buttons for changing the page */}
                <menu className="button-menu mb-4">
                    <button
                        className={activeButton === 1 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(1)}
                    >
                        Easy
                    </button>
                    <button
                        className={activeButton === 2 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(2)}
                    >
                        Medium
                    </button>
                    <button
                        className={activeButton === 3 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(3)}
                    >
                        Hard
                    </button>
                    <button
                        className={activeButton === 4 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(4)}
                    >
                        All
                    </button>
                </menu>

                {/* Table to display questions */}
                <table className="questions-table">
                    <thead>
                        <tr>
                            <th className="column text-center">Select</th>
                            <th className="column text-center">Problem Name</th>
                            <th className="column text-center">Difficulty</th>
                            <th className="column text-center">Solve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuestions.map((question) => (
                            <tr key={question.id}>
                                <td className="column text-center">
                                    <input
                                        type="checkbox"
                                        checked={question.checked}
                                        onChange={() => handleCheckboxChange(question.id)}
                                    />
                                </td>
                                <td className="column text-center">{question.name}</td>
                                <td className="column text-center">{question.difficulty}</td>
                                <td className="column text-center">
                                    <a href="#" onClick={() => handleSolveClick(question.solveLink)}>
                                        <u>Solve</u>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
