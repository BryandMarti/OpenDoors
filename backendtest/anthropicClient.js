// anthropicClient.js
const Anthropic = require('@anthropic-ai/sdk');

const anthropicClient = new Anthropic();

const generateCareerPathway = async (highschoolyr, learningStyle, careerAspirations, institution, city) => {
  try {
    const response = await anthropicClient.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: `
          You are a career advisor that will provide guidance for High School kids for their future careers. Only show 5 different pathways depending on their High School Year, and provide resources, such as links and scholarships, grants, loans, and career resources for each pathway.

          Create a personalized career pathway for a ${highschoolyr} High School Student based on the following details:

          Learning Styles: ${learningStyle},

          Career Aspirations: ${careerAspirations},

          Preferred education Institution: ${institution},

          Explain the Job types that this path has to offer in their future career.

          Also, make sure to show useful links catered to: ${city}.

          The answer should be in Json format
          {
            "careerPathway": {
              "title": "",
              "description": "",
              "steps": [
                {
                  "stage": "",
                  "activities": [
                    "",
                    "",
                    "",
                    ""
                  ]
                },
                // ... (other steps omitted for brevity)
              ],
              "jobTypes": [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            },
            "resources": {
              "location": "",
              "educationalResources": [
                {
                  "name": "",
                  "url": ""
                },
                // ... (other resources omitted for brevity)
              ],
              "scholarshipsAndGrants": [
                {
                  "name": "",
                  "url": ""
                },
                // ... (other scholarships omitted for brevity)
              ],
              "careerResources": [
                {
                  "name": "",
                  "url": ""
                },
                // ... (other career resources omitted for brevity)
              ]
            }
          }
          Respond ONLY with the json and nothing else
          `
        }
      ]
    });

    console.log('Full API Response:', JSON.stringify(response, null, 2));

    if (!response || !response.content || !Array.isArray(response.content)) {
      console.error('Unexpected response structure:', response);
      throw new Error('Unexpected response structure from AI service');
    }

    const lastMessage = response.content[response.content.length - 1];

    if (!lastMessage || typeof lastMessage.text !== 'string') {
      console.error('No valid content in the last message:', lastMessage);
      throw new Error('No valid content found in the AI response');
    }

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(lastMessage.text);
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      console.log('Raw response content:', lastMessage.text);
      throw new Error('Failed to parse AI response as JSON');
    }

    if (!parsedResponse.careerPathway || !parsedResponse.resources) {
      console.error('Parsed response is missing expected fields:', parsedResponse);
      throw new Error('AI response is missing expected data structure');
    }

    return parsedResponse;
  } catch (error) {
    console.error('Error generating career pathway:', error.message);
    throw new Error(`Failed to generate career pathway: ${error.message}`);
  }
};

module.exports = generateCareerPathway;
