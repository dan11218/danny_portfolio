select usabilla.campaign_analytics.username, usabilla.campaign_analytics.campaign_title,  campaigns.status, count(distinct(usabilla.campaign_feedback.id)) as "Feedback items", sum(distinct(usabilla.campaign_analytics.activations)) as "Campaign Views",  "Feedback items" / "Campaign Views" * 100 as "Conversion"
from usabilla.campaign_feedback, usabilla.campaign_analytics, usabilla.campaigns 
where usabilla.campaign_feedback.analytics_id = usabilla.campaign_analytics.campaign_analytics_id and campaigns.id = usabilla.campaign_feedback.campaign_id
 and usabilla.campaign_analytics.username IN ( {{ username }} ), campaigns.status IN ({{ status }}) 
group by usabilla.campaign_analytics.campaign_analytics_id, usabilla.campaign_analytics.campaign_title, usabilla.campaign_analytics.username, campaigns.status