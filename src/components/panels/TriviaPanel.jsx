/**
 * Trivia panel – donut chart by difficulty + question/answer cards
 *
 * triviaData shapes:
 * - { questions, difficultyCounts } on success
 * - { error: "message" } when API failed
 */

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
  } from 'recharts';
  
  const DIFFICULTY_COLORS = ['#16a34a', '#ca8a04', '#dc2626'];
  
  function TriviaPanel({ triviaData }) {
    if (triviaData && triviaData.error) {
      return (
        <div className="trivia-panel">
          <article className="trivia-error-card">
            <h3 className="trivia-error-title">Trivia could not be loaded</h3>
            <p className="trivia-error-message">{triviaData.error}</p>
          </article>
        </div>
      );
    }
  
    const questions = triviaData?.questions;
    const difficultyCounts = triviaData?.difficultyCounts;
  
    if (!questions || questions.length === 0) {
      return (
        <div className="trivia-panel">
          <p className="trivia-empty">No trivia questions to display.</p>
        </div>
      );
    }
  
    return (
      <div className="trivia-panel">
        <h3 className="trivia-panel-title">Trivia Questions by Difficulty</h3>
  
        <div className="trivia-chart-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={difficultyCounts}
                dataKey="count"
                nameKey="difficulty"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={2}
              >
                {difficultyCounts.map((entry, index) => (
                  <Cell
                    key={entry.difficulty}
                    fill={DIFFICULTY_COLORS[index]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
  
        <h3 className="trivia-panel-title">Trivia questions</h3>
        <div className="trivia-cards-grid">
          {questions.map((item, index) => (
            <article key={index} className="trivia-question-card">
              <p className="trivia-card-row">
                <strong>Question:</strong> {item.question}
              </p>
              <p className="trivia-card-row">
                <strong>Answer:</strong> {item.answer}
              </p>
              <p className="trivia-card-row">
                <strong>Difficulty:</strong> {item.difficulty}
              </p>
              <p className="trivia-card-row">
                <strong>Category:</strong> {item.category}
              </p>
            </article>
          ))}
        </div>
      </div>
    );
  }
  
  export default TriviaPanel;