export async function getTemperatureData() {
  const url =
    "https://api.thingspeak.com/channels/3100682/feeds.json?api_key=ZUNCCSG4YJW9N26K";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const feeds = data.feeds || [];

    const temperatures = feeds.map((feed) => ({
      time: new Date(feed.created_at),
      temp: parseFloat(feed.field1),
    }));

    return temperatures;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}
