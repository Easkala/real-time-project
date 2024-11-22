import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Card } from '../components/Card';

export default function Performance() {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      data: [85, 88, 92, 90, 94, 96],
    }],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Performance Overview</Text>
        <Text style={styles.subtitle}>Last 6 Months</Text>
      </View>

      <Card style={styles.chartCard}>
        <LineChart
          data={performanceData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </Card>

      <View style={styles.statsGrid}>
        <Card style={styles.statCard}>
          <Text style={styles.statLabel}>Current Score</Text>
          <Text style={styles.statValue}>96%</Text>
        </Card>

        <Card style={styles.statCard}>
          <Text style={styles.statLabel}>Target</Text>
          <Text style={styles.statValue}>90%</Text>
        </Card>

        <Card style={styles.statCard}>
          <Text style={styles.statLabel}>Improvement</Text>
          <Text style={styles.statValue}>+11%</Text>
        </Card>

        <Card style={styles.statCard}>
          <Text style={styles.statLabel}>Rank</Text>
          <Text style={styles.statValue}>#3</Text>
        </Card>
      </View>

      <Card style={styles.achievementsCard}>
        <Text style={styles.sectionTitle}>Recent Achievements</Text>
        <View style={styles.achievement}>
          <Text style={styles.achievementTitle}>Top Performer - June 2024</Text>
          <Text style={styles.achievementDesc}>Exceeded sales target by 15%</Text>
        </View>
        <View style={styles.achievement}>
          <Text style={styles.achievementTitle}>Customer Excellence Award</Text>
          <Text style={styles.achievementDesc}>100% positive customer feedback</Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  chartCard: {
    margin: 20,
    padding: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  statCard: {
    width: '45%',
    margin: '2.5%',
    padding: 15,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 4,
  },
  achievementsCard: {
    margin: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  achievement: {
    marginBottom: 15,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  achievementDesc: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
});