// ModulesPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ModulesPage = () => {
  const { courseId } = useParams();
  const modules = [
    {
      id: 1,
      title: 'Module 1',
      content: `
        Exploring the Fundamentals of Climate Justice and its Importance in Addressing Environmental Challenges
        Introduction:
        
        Climate change is one of the defining challenges of our time, impacting everything from weather patterns and ecosystems to economies and human health. However, the impacts of this crisis are not distributed equally. This is where the concept of climate justice emerges, highlighting the ethical and human dimensions of climate change.
        
        Understanding Climate Justice:
        
        Climate justice recognizes that:
        
        Unequal Impacts: Communities and countries least responsible for greenhouse gas emissions often bear the brunt of climate change impacts, such as rising sea levels, extreme weather events, and resource scarcity. This injustice stems from historical patterns of colonization, industrialization, and unequal development.
        Responsibility and Equity: Addressing climate change requires acknowledging historical responsibility and ensuring an equitable distribution of burdens and benefits. This includes developed nations providing financial and technological support to developing nations for mitigation and adaptation strategies.
        Systemic Change: Climate change is not just an environmental issue; it is deeply intertwined with social, economic, and political systems. Climate justice aims to address systemic inequalities and power imbalances that perpetuate the crisis.
        Key Pillars of Climate Justice:
        
        Just Transition: A shift towards a sustainable future must happen in a way that protects workers, communities, and livelihoods dependent on fossil fuels. This includes providing support for retraining, job creation in green sectors, and ensuring a fair distribution of benefits from the transition.
        Indigenous Rights: Recognizing the critical role of Indigenous communities in environmental stewardship and granting them decision-making power in climate solutions is crucial. Moreover, respecting their territorial rights and traditional knowledge is essential for effective and culturally sensitive solutions.
        Gender Equality: Women and girls are disproportionately affected by climate change due to existing gender inequalities. Climate justice requires integrating gender perspectives into climate policies and empowering women as leaders and decision-makers.
        Global Solidarity: Achieving climate justice necessitates international cooperation and solidarity. This includes holding developed nations accountable for their historical emissions and ensuring access to finance, technology, and knowledge for developing nations.
        Importance of Climate Justice:
        
        Effective Solutions: By addressing the underlying injustices, climate justice promotes more effective and sustainable solutions. Engaging historically marginalized communities fosters diverse perspectives and locally-tailored approaches.
        Moral Imperative: Climate justice demands ethical consideration for future generations and prioritizes human well-being above all else. This approach ensures a just and equitable world for all, regardless of geographical location or contribution to the crisis.
        Empowerment and Action: Recognizing the systemic nature of climate change empowers individuals and communities to demand change and advocate for solutions that address root causes rather than merely symptoms.
        Conclusion:
        
        Climate justice is not just a slogan; it is a framework for navigating the complex challenges of climate change. By recognizing the ethical dimensions of the crisis, ensuring equity in burden-sharing and solutions, and promoting systemic change, we can build a more resilient and just future for all. Addressing climate change without addressing climate justice is ultimately ineffective and morally unsound. The path forward demands action that promotes both environmental sustainability and social justice, creating a world where everyone has the opportunity to thrive.
      `,
    },
    {
      id: 2,
      title: 'Module 2',
      content: `
        Exploring the Fundamentals of Climate Justice and its Importance in Addressing Environmental Challenges
        Introduction:
        
        Climate change is one of the defining challenges of our time, impacting everything from weather patterns and ecosystems to economies and human health. However, the impacts of this crisis are not distributed equally. This is where the concept of climate justice emerges, highlighting the ethical and human dimensions of climate change.
        
        Understanding Climate Justice:
        
        Climate justice recognizes that:
        
        Unequal Impacts: Communities and countries least responsible for greenhouse gas emissions often bear the brunt of climate change impacts, such as rising sea levels, extreme weather events, and resource scarcity. This injustice stems from historical patterns of colonization, industrialization, and unequal development.
        Responsibility and Equity: Addressing climate change requires acknowledging historical responsibility and ensuring an equitable distribution of burdens and benefits. This includes developed nations providing financial and technological support to developing nations for mitigation and adaptation strategies.
        Systemic Change: Climate change is not just an environmental issue; it is deeply intertwined with social, economic, and political systems. Climate justice aims to address systemic inequalities and power imbalances that perpetuate the crisis.
        Key Pillars of Climate Justice:
        
        Just Transition: A shift towards a sustainable future must happen in a way that protects workers, communities, and livelihoods dependent on fossil fuels. This includes providing support for retraining, job creation in green sectors, and ensuring a fair distribution of benefits from the transition.
        Indigenous Rights: Recognizing the critical role of Indigenous communities in environmental stewardship and granting them decision-making power in climate solutions is crucial. Moreover, respecting their territorial rights and traditional knowledge is essential for effective and culturally sensitive solutions.
        Gender Equality: Women and girls are disproportionately affected by climate change due to existing gender inequalities. Climate justice requires integrating gender perspectives into climate policies and empowering women as leaders and decision-makers.
        Global Solidarity: Achieving climate justice necessitates international cooperation and solidarity. This includes holding developed nations accountable for their historical emissions and ensuring access to finance, technology, and knowledge for developing nations.
        Importance of Climate Justice:
        
        Effective Solutions: By addressing the underlying injustices, climate justice promotes more effective and sustainable solutions. Engaging historically marginalized communities fosters diverse perspectives and locally-tailored approaches.
        Moral Imperative: Climate justice demands ethical consideration for future generations and prioritizes human well-being above all else. This approach ensures a just and equitable world for all, regardless of geographical location or contribution to the crisis.
        Empowerment and Action: Recognizing the systemic nature of climate change empowers individuals and communities to demand change and advocate for solutions that address root causes rather than merely symptoms.
        Conclusion:
        
        Climate justice is not just a slogan; it is a framework for navigating the complex challenges of climate change. By recognizing the ethical dimensions of the crisis, ensuring equity in burden-sharing and solutions, and promoting systemic change, we can build a more resilient and just future for all. Addressing climate change without addressing climate justice is ultimately ineffective and morally unsound. The path forward demands action that promotes both environmental sustainability and social justice, creating a world where everyone has the opportunity to thrive.
      `,
    },
    {
      id: 3,
      title: 'Module 3',
      content: `
        Exploring the Fundamentals of Climate Justice and its Importance in Addressing Environmental Challenges
        Introduction:
        
        Climate change is one of the defining challenges of our time, impacting everything from weather patterns and ecosystems to economies and human health. However, the impacts of this crisis are not distributed equally. This is where the concept of climate justice emerges, highlighting the ethical and human dimensions of climate change.
        
        Understanding Climate Justice:
        
        Climate justice recognizes that:
        
        Unequal Impacts: Communities and countries least responsible for greenhouse gas emissions often bear the brunt of climate change impacts, such as rising sea levels, extreme weather events, and resource scarcity. This injustice stems from historical patterns of colonization, industrialization, and unequal development.
        Responsibility and Equity: Addressing climate change requires acknowledging historical responsibility and ensuring an equitable distribution of burdens and benefits. This includes developed nations providing financial and technological support to developing nations for mitigation and adaptation strategies.
        Systemic Change: Climate change is not just an environmental issue; it is deeply intertwined with social, economic, and political systems. Climate justice aims to address systemic inequalities and power imbalances that perpetuate the crisis.
        Key Pillars of Climate Justice:
        
        Just Transition: A shift towards a sustainable future must happen in a way that protects workers, communities, and livelihoods dependent on fossil fuels. This includes providing support for retraining, job creation in green sectors, and ensuring a fair distribution of benefits from the transition.
        Indigenous Rights: Recognizing the critical role of Indigenous communities in environmental stewardship and granting them decision-making power in climate solutions is crucial. Moreover, respecting their territorial rights and traditional knowledge is essential for effective and culturally sensitive solutions.
        Gender Equality: Women and girls are disproportionately affected by climate change due to existing gender inequalities. Climate justice requires integrating gender perspectives into climate policies and empowering women as leaders and decision-makers.
        Global Solidarity: Achieving climate justice necessitates international cooperation and solidarity. This includes holding developed nations accountable for their historical emissions and ensuring access to finance, technology, and knowledge for developing nations.
        Importance of Climate Justice:
        
        Effective Solutions: By addressing the underlying injustices, climate justice promotes more effective and sustainable solutions. Engaging historically marginalized communities fosters diverse perspectives and locally-tailored approaches.
        Moral Imperative: Climate justice demands ethical consideration for future generations and prioritizes human well-being above all else. This approach ensures a just and equitable world for all, regardless of geographical location or contribution to the crisis.
        Empowerment and Action: Recognizing the systemic nature of climate change empowers individuals and communities to demand change and advocate for solutions that address root causes rather than merely symptoms.
        Conclusion:
        
        Climate justice is not just a slogan; it is a framework for navigating the complex challenges of climate change. By recognizing the ethical dimensions of the crisis, ensuring equity in burden-sharing and solutions, and promoting systemic change, we can build a more resilient and just future for all. Addressing climate change without addressing climate justice is ultimately ineffective and morally unsound. The path forward demands action that promotes both environmental sustainability and social justice, creating a world where everyone has the opportunity to thrive.
      `,
    },
  ];

  return (
    <div>
      <h2>Modules for Course {courseId}</h2>
      {modules.map((module) => (
        <div key={module.id}>
          <h3>{module.title}</h3>
          <p>{module.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ModulesPage;
