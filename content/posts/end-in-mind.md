+++
title = "Begin with the end in mind"
date = 2022-06-03
[taxonomies]
tags= ["blogs", "books"]
+++


One of the 7 habits of highly effective people by Stephen Covey is ‘begin with the end in mind’. I’ve found this idea helpful in different aspects of my life. Beginning with the end in mind can help you make decisions. In todays world you’re faced with difficult choices all the time, having a guideline for these decisions can help immensely. I want to share a couple of examples on how I’ve been able to apply this at work.

Let’s start with how we can apply this idea for data engineering. In data engineering one of the main questions you should ask yourself is: ‘How will the data going to be accessed?’. We can call this data access patterns. These patterns can and should be translated to requirements. How frequently will the data be accessed? How fresh should the data be? What kind of latency is acceptable? How much data will be queried at once? Without knowing the answers to these questions, we can’t make the right decisions. It might be that an object store is the best solution or an MPP database. You just don’t know if you don’t begin with the end in mind.

Another great example at the workplace are dashboards and reports. Showing data in a meaningful way can be immensily helpful, but the emphasis here should be on can. I’ve made and seen countless of dashboards and reports that ended up being useless. If they don’t help someone in a meaningful way, usually with making decisions based on data, then you’ve just wasted your own time. By ensuring that we know who are consumers is and what they are trying to achieve, only then can we make something that is useful for them in their problem. Always begin with the end in mind.

Last example for this article will be for data science. Do you want to predict churn or do you want to reduce it? If we keep the end in mind, the objective is quite clear. Ultimately we want to reduce churn. If we predict churn, but we don’t know how to stop it, have we really done something useful? We can look into different kinds of treatments on different kinds of consumers and figure out how we can have a positive effect for the business. Something to consider here: We can reduce churn, but on the other hand we can also trigger people to churn if we apply the wrong treatment (to the wrong consumers). 