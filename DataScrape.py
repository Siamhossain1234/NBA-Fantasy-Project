from bs4 import BeautifulSoup
import requests
import pandas as pd
import time

TeamAbrv = ['BRK','MIL','PHI','ATL','BOS','NYK','WAS','IND','CHO','MIA','CHI','TOR','ORL','CLE','DET','OKC','UTA','PHO','LAC','DEN','LAL','POR','DAL','MEM','GSW','SAS','SAC','MIN','HOU','NOP']
# Base URL
BASE_URL = 'https://www.basketball-reference.com'
Active = 30
Curr = 0

#links for all active teams
team_links = []
for team in TeamAbrv:
    team_links.append(f'{BASE_URL}/teams/{team}/2025.html')
#Scrape player stats for each team
all_teams = []

for team_url in team_links:
    print(f"Scraping {team_url}...")
    team_page = requests.get(team_url).text
    soup = BeautifulSoup(team_page, 'lxml')
    stats = soup.find_all('table', class_ = "stats_table")[1]
    
    #Locate the stats table for players 
    table = soup.find_all('table',class_ = "stats_table") 
    if table:
        # Convert the table to a DataFrame
        df = pd.read_html(str(table))[2]
        df.columns = df.columns.droplevel(0) if isinstance(df.columns, pd.MultiIndex) else df.columns
        df['Team'] = team_url.split('/')[-2]  # Add team identifier
        

        print(team_url.split('/')[-2])
        print(f'Team{Curr}/ {Active}')
        print(df)

        all_teams.append(df)
        
    time.sleep(5)  # Be polite to the server

#Combine all data and save to CSV
final_df = pd.concat(all_teams, ignore_index=True)
final_df.drop('Awards',axis = 1, inplace = True)
final_df.to_csv('nba_player_stats.csv', index=False)
print("Data saved to 'nba_player_stats.csv'")