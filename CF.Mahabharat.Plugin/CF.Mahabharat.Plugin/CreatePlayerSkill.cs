using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace CF.Mahabharat.Plugin
{
    public class CreatePlayerSkill : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // Obtain the execution context
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // Obtain the IOrganizationService instance 
            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService orgService = serviceFactory.CreateOrganizationService(context.UserId);

            // Obtain the Tracing service reference
            ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            try
            {
                // Retrieve the target entity
                Entity targetEntity = (Entity)context.InputParameters["Target"];

                // Creation of the Player Skills
                Entity createPlayerSkill = new Entity
                {
                    LogicalName = "cf_playerskill"
                };
                createPlayerSkill["cf_name"] = "Generated from Plugin";
                createPlayerSkill["cf_skill"] = new EntityReference(targetEntity.LogicalName, targetEntity.Id);
                createPlayerSkill["cf_player"] = new EntityReference("cf_player", new Guid("84e5797d-6a78-ee11-8179-00224804bb84"));
                orgService.Create(createPlayerSkill);

                // Define FetchXML query to retrieve a collection of cf_player entities
                string fetchXML = @"<fetch version='1.0' mapping='logical' savedqueryid='d1ecf0da-705a-4bfe-8e4c-f1e216c4d07f' no-lock='false' distinct='true'>
	                <entity name='cf_player'>
		                <attribute name='cf_playerid'/>
		                <attribute name='cf_name'/>
		                <attribute name='createdon'/>
		                <order attribute='cf_name' descending='false'/>
		                <attribute name='cf_firstname'/>
		                <attribute name='cf_lastname'/>
		                <filter type='and'>
			                <condition attribute='statecode' operator='eq' value='0'/>
		                </filter>
	                </entity>
                </fetch>";

                // Retrieve a collection of cf_player entities based on the FetchXML query
                EntityCollection entityCollection = orgService.RetrieveMultiple(new FetchExpression(fetchXML));

                // Iterate through the retrieved entities and create Player Skills records
                foreach (var item in entityCollection.Entities)
                {
                    Entity createPlayerSkill2 = new Entity
                    {
                        LogicalName = "cf_playerskill"
                    };
                    createPlayerSkill2["cf_name"] = "Generated from Plugin";
                    createPlayerSkill2["cf_skill"] = new EntityReference(targetEntity.LogicalName, targetEntity.Id);
                    createPlayerSkill2["cf_player"] = new EntityReference(item.LogicalName, item.Id);
                    orgService.Create(createPlayerSkill2);
                }

            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                // Handle specific faults and throw a custom exception
                throw new InvalidPluginExecutionException("The following error occurred in CreatePlayerSkill plugin.", ex);
            }
            catch (Exception ex)
            {
                // Trace the generic exception for debugging purposes
                tracingService.Trace("CreatePlayerSkill: error: {0}", ex.ToString());
                throw;
            }
        }
    }
}
