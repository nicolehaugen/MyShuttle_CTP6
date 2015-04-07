namespace MyShuttle.API.Hubs
{
    using Microsoft.AspNet.SignalR;

    public interface IClient
    {
        void UpdateEmployeePosition(string employeeId, double latitude, double longitude);
    }

    public class MyShuttleHub : Hub<IClient>
    {
        public void UpdateEmployeePosition(string employeeId, double latitude, double longitude)
        {
            Clients.All.UpdateEmployeePosition(employeeId, latitude, longitude);
        }
    }
}
